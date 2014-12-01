var serviceURL = "http://localhost/appproductos/services/";

var employees;

$('#employeeListPage').bind('pageinit', function(event) {
	getEmployeeList();
});

function getEmployeeList() {
	$.getJSON(serviceURL + 'getemployees.php', function(data) {
		$('#employeeList li').remove();
		employees = data.items;
		$.each(employees, function(index, employee) {
			$('#employeeList').append('<li data-icon="info" class="ui-btn">' +
					'<input type="hidden" id="idPro' + employee.idPro + '" value="' + employee.idPro + '">' +
					'<input type="number" id="cant' + employee.idPro + '" value="1" style="width:30px; float:left; margin-right:10px;">' +
					'<p id="Codigo' + employee.idPro + '">' + employee.Codigo + '</p>' +
					'<h4 id="Producto' + employee.idPro + '">' + employee.Nombre + '</h4>' +
					'<span id="Valor' + employee.idPro + '" class="ui-li-count">$' + employee.Valor + '</span></li>');
		});
		$('#employeeList').listview('refresh');
	});
}