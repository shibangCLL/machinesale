from django.db import models
from uuslug import slugify
from django.urls import reverse
import uuid
import os


def products_directory_path(instance, filename):
    ext = filename.split('.')[-1]
    filename = '{}.{}'.format(uuid.uuid4().hex[:10], ext)
    # return the whole path to the file
    return os.path.join("products", filename)


class Category(models.Model):
    """分类"""
    name = models.CharField('分类名', max_length=30, unique=True)
    slug = models.SlugField('slug', max_length=40)
    parent_category = models.ForeignKey('self', verbose_name="父级分类", blank=True, null=True, on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        if not self.id or not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']
        verbose_name = "分类"
        verbose_name_plural = verbose_name


class Tag(models.Model):
    """文章标签"""
    name = models.CharField('标签名', max_length=30, unique=True)
    slug = models.SlugField('slug', max_length=40)

    def __str__(self):
        return self.name

    # def get_absolute_url(self):
    #     return reverse('products:tag_detail', args=[self.slug])
    #
    # def get_article_count(self):
    #     return Product.objects.filter(tags__slug=self.slug).count()

    def save(self, *args, **kwargs):
        if not self.id or not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    class Meta:
        ordering = ['name']
        verbose_name = "标签"
        verbose_name_plural = verbose_name


class Product(models.Model):
    title = models.CharField('标题', max_length=200, unique=True)
    slug = models.SlugField('slug', max_length=60, blank=True)
    jlld = models.CharField('进料粒度', max_length=20, blank=True)
    scnl = models.CharField('生产能力', max_length=20, blank=True)
    yyly = models.CharField('应用领域', max_length=200, blank=True)
    sywl = models.CharField('适用物料', max_length=200, blank=True)
    cptd = models.CharField('产品特点', max_length=300, blank=True)
    body = models.TextField('正文')
    gzyl = models.TextField('工作原理')
    jscs = models.CharField('技术参数', max_length=200, blank=True)
    views = models.PositiveIntegerField('浏览量', default=0)
    image = models.ImageField(upload_to=products_directory_path, verbose_name="产品图片")

    category = models.ForeignKey('Category', verbose_name='分类', on_delete=models.CASCADE, blank=True, null=True)
    tags = models.ManyToManyField('Tag', verbose_name='标签集合', blank=True)

    def save(self, *args, **kwargs):
        if not self.id or not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse('product:detail', kwargs={'slug': self.slug})

    def viewed(self):
        self.views += 1
        self.save(update_fields=['views'])

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-title']
        verbose_name = "产品"
        verbose_name_plural = verbose_name


class Advantage(models.Model):
    title = models.CharField('标题', max_length=200, blank=True)
    content = models.TextField('内容')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-title']
        verbose_name = "产品优势"
        verbose_name_plural = verbose_name


class RelatedImage(models.Model):
    image = models.ImageField(upload_to=products_directory_path, verbose_name="图片")
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "相关图片"
        verbose_name_plural = verbose_name
