from django.urls import path
from . import views

# 正在部署的应用的名称
app_name = 'product'

urlpatterns = [
    path('', views.product_list, name='product_list'),
    path('<slug:slug>/', views.detail, name='detail'),
]
