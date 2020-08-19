# https://www.shibangchina.com/products/
import requests
import re
from requests.exceptions import RequestException
import uuid
import jieba
from django.core.files.base import ContentFile
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'machinesale.settings')
django.setup()

from products.models import Product, Category, Tag, RelatedImage, Advantage

url = 'http://www.shibang.cn/kshebei/posui/pew_epo.php'
image_url = 'https://www.shibangchina.com/'


def get_one_page(url):
    url = url[0:-1]
    print(url)
    try:
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"}
        res = requests.get(url=url, headers=headers)
        res.encoding = 'utf-8'
        if res.status_code == 200:
            print(res.text)
            return res.text
        else:
            return None
    except RequestException:
        return None


def parse_one_page(html):
    title_pattern = re.compile('<h1>(.*?)</h1>', re.S)

    jlld_pattern = re.compile('<p>进料粒度：(.*?)</p>', re.S)

    scnl_pattern = re.compile('<p>生产能力：(.*?)</p>', re.S)
    cptd_pattern = re.compile('<div class="product_feature">产品特点：(.*?)</div>', re.S)

    # yyly_pattern = re.compile('<p class="newColor"><strong>【应用领域】</strong>: <span>(.*?)</span>', re.S)
    sywl_pattern = re.compile('<p>适用物料：(.*?)</p>', re.S)

    body_pattern = re.compile('</h1>.*?<p>(.*?)</p>', re.S)

    gzyl_pattern = re.compile('<h3>工作原理</h3>(.*?)</div>', re.S)
    jscs_pattern = re.compile('<h2>产品参数</h2>.*?<div class="col-md-12 col-sm-12">(.*?)<div class="note">', re.S)
    cpys_pattern = re.compile('<div class="perform_content">.*?<h3>(.*?)</h3>.*?<p>(.*?)</p>', re.S)

    image_pattern = re.compile(
        r'<div class="imgbox">.*?src="(.*?)"',
        re.S)

    relatedimage_pattern = re.compile(
        'product_image_list.*?<div class="col-md-6 col-sm-6">.*?img-responsive center-block" src="//(.*?)" /></div>.*?img-responsive center-block" src="//(.*?)" /></div>.*?img-responsive center-block" src="//(.*?)" /></div>.*?img-responsive center-block" src="//(.*?)" /></div>',
        re.S)
    items = re.findall(relatedimage_pattern, html)

    category_pattern = re.compile('<li><a href="../product/.*?php">(.*?)</a>', re.S)

    title = re.findall(title_pattern, html)[0]
    # 产品特点
    cptd = re.findall(cptd_pattern, html)[0]
    print(title)
    # 进料粒度
    jlld = re.findall(jlld_pattern, html)[0]
    # 生产能力
    scnl = re.findall(scnl_pattern, html)[0]
    # 应用领域
    # yyly = re.findall(yyly_pattern, html)[0]
    # 适用物料
    sywl = re.findall(sywl_pattern, html)[0]
    # 正文
    body = re.findall(body_pattern, html)[0]
    # 工作原理
    gzyl = re.findall(gzyl_pattern, html)[0]
    # 技术参数
    jscs = re.findall(jscs_pattern, html)[0]

    # 分类
    category = "大型成套设备"

    # 产品优势
    # cpys_html_pattern = re.compile('<h2 id="advantage">产品优势</h2>(.*?)<h2 id="working">工作原理</h2>', re.S)
    # cpys_html = re.findall(cpys_html_pattern, html)[0]
    # cpys_pattern = re.compile('<h3>(.*?)</h3>.*?<p>(.*?)</p>', re.S)
    cpys = re.findall(cpys_pattern, html)

    # 图片
    image_str = re.findall(image_pattern, html)[0]
    img_url = 'https://www.shibangchina.com/' + image_str
    request = requests.get(img_url)
    filename = '{}.{}'.format(uuid.uuid4().hex[:10], '.png')
    upload_image_file = ContentFile(request.content, name=filename)

    # 标签
    tags_list = jieba.lcut_for_search(title)
    try:
        cat = Category.objects.get(name=category)
    except Exception as e:
        cat = None

    if cat:
        pro = Product(title=title, cptd=cptd, jlld=jlld, scnl=scnl, yyly='', sywl=sywl, body=body, gzyl=gzyl, jscs=jscs,
                      category=cat, image=upload_image_file)
        pro.save()
    else:
        cat = Category(name=category)
        cat.save()
        pro = Product(title=title, cptd=cptd, jlld=jlld, scnl=scnl, yyly='', sywl=sywl, body=body, gzyl=gzyl, jscs=jscs,
                      category=cat, image=upload_image_file)
        pro.save()

    for spy in cpys:
        adv = Advantage()
        adv.title = spy[0]
        adv.content = spy[1]
        adv.product = pro
        adv.save()

    for item in items:
        for i in item:
            image_url = 'http://' + i
            request = requests.get(image_url)
            filename = '{}.{}'.format(uuid.uuid4().hex[:10], '.png')
            upload_file = ContentFile(request.content, name=filename)
            RelatedImage.objects.create(image=upload_file, product=pro)

    for tag in tags_list:
        try:
            ta = Tag.objects.get(name=tag)
        except Exception as e:
            ta = None
        if ta:
            pro.tags.add(ta)
            pro.save()
        else:
            ta = Tag()
            ta.name = tag
            ta.save()
            pro.tags.add(ta)
            pro.save()


if __name__ == "__main__":
    with open('urls.txt', 'r') as f:
        urls = f.readlines()
        for url in urls:
            url.strip('\n')
            text = get_one_page(url)
            print(text)
            parse_one_page(text)
