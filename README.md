# blanket-inline
Script snippet extending blanket.js by adding option testing coverage of embeded scripts

## Config

Add a data-cover-embed attribute to the script reference of each embeded javascript in document you want covered

```javascript
<script data-cover-embed>
function test (a) {
	if (a)
		return true
	return false
}
</script>
```