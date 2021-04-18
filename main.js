var images_a = ["images/Dad.jpg","images/Mom.jpg","images/Bryan.jpg","images/Ann.jpg"];
var name_a = ["Joseph Kurian","Reshmi Joseph","Bryan Joseph","Ann Joseph"];

var data_num = 0;

function changeData() {
    if (data_num >= images_a.length) {
        data_num = 0;
    }

    document.getElementById("image").src = images_a[data_num];
    document.getElementById("name").innerHTML = name_a[data_num];

    data_num++;

}