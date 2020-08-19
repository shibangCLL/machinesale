from django.shortcuts import render, get_object_or_404
from .models import Product


# Create your views here.
def product_list(request):
    posui_product_list = Product.objects.filter(category__name='破碎设备')
    mofen_product_list = Product.objects.filter(category__name='磨粉设备')
    fuzhu_product_list = Product.objects.filter(category__name='辅助设备')
    daxing_product_list = Product.objects.filter(category__name='大型成套设备')
    return render(request, 'shibang124/products_list.html', locals())


def detail(request, slug):
    product = get_object_or_404(Product, slug=slug)
    category_name = product.category.name
    product.viewed()
    posui_product_list = Product.objects.filter(category__name=category_name).order_by('-views')[:3]
    return render(request, 'shibang124/products_detail.html', locals())


def index(request):
    hot_product_list = Product.objects.all().order_by('-views')[0:6]
    return render(request, 'shibang124/index.html', locals())
