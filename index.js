function updateMap() {
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data);  //rsp here stands for a variable name which is reponse
            rsp.data.forEach(element => {
                latitude = element.coordinates[0];
                longitude = element.coordinates[1];
                cases = element.cases;
                if (cases>300){
                    color = "rgb(245,0,110)";

                }
                else{
                    color = `rgb(${cases},0,0)`;
                }
                //Mark on the map
                new mapboxgl.Marker({
                    draggable: false
                    // color : "rgb(245,0,110)"
                    // color: color
                })
                    .setLngLat([latitude,longitude])
                    .addTo(map);
            });
        })
}
updateMap();