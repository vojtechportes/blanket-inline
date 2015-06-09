+function(){			
  var items = document.querySelectorAll('script[data-cover-embed]');
  for (var key in items) {
      if (items.hasOwnProperty(key) && key !== 'length') {
      var content = items[key].innerHTML;
      console.log(content);
      var script = document.createElement('script');
      script.dataset['cover'] = '';
      script.src = 'data:text/javascript;base64,' + window.btoa(content);

      document.getElementsByTagName('body')[0].appendChild(script);
  	}
  }
}();