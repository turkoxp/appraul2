var serviceURL = "http:/turconisrl.com/appproductos/services/";

var employees;

$('#employeeListPagen').bind('pageinit', function(event) {
	getEmployeeList();
});

function getEmployeeList() {
	$.getJSON(serviceURL + 'getemployees.php', function(data) {
		$('#employeeListn li').remove();
		employees = data.items;
		$.each(employees, function(index, employee) {
			$('#employeeListn').append('<li data-icon="info"><a href="#myPopup3" data-rel="popup" class="ui-btn" data-position-to="window" data-transition="flip">' +
					'<h4>' + employee.Nombre + '</h4>' +
					'<p>' + employee.Codigo + '</p>' +
					'<span class="ui-li-count">$' + employee.Valor + '</span></a></li>' + 
				    '</div>');
				    });
		$('#employeeListn').listview('refresh');
	});
}