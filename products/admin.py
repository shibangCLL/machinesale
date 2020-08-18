from django.contrib import admin

# Register your models here.

from .models import Product, Category, Tag, Advantage, RelatedImage


class ProductAdmin(admin.ModelAdmin):
    list_display = [
        'title',
        'jlld',
        'scnl',
        'yyly',
        'sywl',
        'cptd',
        'body',
        'gzyl',
        'jscs',
        'image',
        'category',
        'views']
    list_filter = [
        'title',
        'tags',
        'category']


class AdvantageAdmin(admin.ModelAdmin):
    list_display = [
        'title',
        'content',
        'product']
    list_filter = [
        'title',
        'content',
        'product']


class TagAdmin(admin.ModelAdmin):
    list_display = [
        'name', 'slug', ]
    fields = ['name', ]
    list_filter = [
        'name']


class CategoryAdmin(admin.ModelAdmin):
    list_display = [
        'name', 'slug', ]
    fields = ['name', ]
    list_filter = [
        'name']


class RelatedImageAdmin(admin.ModelAdmin):
    list_display = [
        'image',
        'product']
    list_filter = [
        'product']


admin.site.register(Category, CategoryAdmin)
admin.site.register(Tag, TagAdmin)
admin.site.register(Advantage, AdvantageAdmin)
admin.site.register(RelatedImage, RelatedImageAdmin)
admin.site.register(Product, ProductAdmin)
