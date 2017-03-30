Bootstrap框架的网格系统工作原理如下：

1、数据行(.row)必须包含在容器（.container）中，以便为其赋予合适的对齐方式和内距(padding)。如：
    <div class="container">
      <div class="row"></div>
    </div>

2、在行(.row)中可以添加列(.column)，但列数之和不能超过平分的总列数，比如12(网格超过12会自动换行显示)。如：
    <div class="container">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-8"></div>
        
3、具体内容应当放置在列容器（column）之内，而且只有列（column）才可以作为行容器(.row)的直接子元素
