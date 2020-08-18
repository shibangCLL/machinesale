import jieba

print(jieba.lcut_for_search('履带式移动破碎站'))
print('==========================')
print(jieba.lcut('履带式移动破碎站'))
print('==========================')
print(jieba.lcut('履带式移动破碎站', cut_all=False))
