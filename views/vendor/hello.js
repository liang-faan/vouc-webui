$(document).ready(function() {
    $.ajax({
        url: "http://10.185.0.100/remediatedOrders"
    }).then(function(data) {
	 alert("Data:" + data);
      // $('.remediatedOrders-orders_remediated').append(data.orders_remediated);
     
    });
});