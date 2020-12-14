'use strict'

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'use Image alternative img label',
      category: 'Performance Optimization',
      recommended: true,
      url: 'https://github.com/Hzy0913/eslint-plugin-fly'
    },
    fixable: 'code',
    schema: []
  },
  create: function(context) {
    return {
      'Program JSXIdentifier': (node) => {
        if (node.name === 'img') {
          context.report({
            node,
            message: '你需要使用统一的 <Image /> 组件来替代img标签'
          });
        }
      },
    };
  }
};
