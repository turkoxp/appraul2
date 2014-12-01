var serviceURL = "http://localhost/appproductos/services/";

var employees;

$('#employeeListPage1').bind('pageinit', function(event) {
	getEmployeeList();
});

function getEmployeeList() {
	$.getJSON(serviceURL + 'getemployees1.php', function(data) {
		$('#employeeList1 li').remove();
		employees = data.items;
		$.each(employees, function(index, employee) {
			$('#employeeList1').append('<li data-icon="info"><a href="#myPopup3" data-rel="popup" class="ui-btn" data-position-to="window" data-transition="flip">' +
					'<h4>' + employee.Nombre + '</h4>' +
					'<p>' + employee.Codigo + '</p>' +
					'<span class="ui-li-count">$' + employee.Valor + '</span></a></li>' + 
				    '</div>');
				    });
		$('#employeeList1').listview('refresh');
		
	});
}