`buildings-full.js` is the result of scraping MIT's not-publicized building API (used for [whereis.mit.edu](https://whereis.mit.edu)) with `building.py`. `buildings-middle.js` is after a bit of processing, making the data an array of objects (rather than an array of [array of one object]) and removing an undefined element. To extract the variables chosen for the final cleaned result, `buildings.js`, I did this in the browser console:

```
objs.map(({name, long_wgs84, lat_wgs84, bldgimg, street, bldgnum, altname}) => ({name, long_wgs84, lat_wgs84, bldgimg, street, bldgnum, altname}))
```

where `objs` is `buildings-middle.js`.