/**
 * Theme: Dastyle - Responsive Bootstrap 4 Admin Dashboard
 * Author: themes
 * Datatables Js
 */

 
$(document).ready(function() {
  $('#datatable').DataTable();

  $(document).ready(function() {
      $('#datatable2').DataTable();  
  } );

  //Buttons examples
  var table = $('#datatable-buttons').DataTable({
      lengthChange: false,
      buttons: ['copy', 'excel', 'pdf', 'colvis']
  });

  table.buttons().container()
      .appendTo('#datatable-buttons_wrapper .col-md-6:eq(0)');

      $('#row_callback').DataTable( {
        "createdRow": function ( row, data, index ) {
            if ( data[5].replace(/[\$,]/g, '') * 1 > 150000 ) {
                $('td', row).eq(5).addClass('highlight');
            }
        }
    } );
    
} );

/* Formatting function for row details - modify as you need */
function format ( d ) {
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
            '<td>نام و نام خانوادگی:</td>'+
            '<td>'+d.name+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>تعداد پسوند:</td>'+
            '<td>'+d.extn+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>اطلاعات اضافی:</td>'+
            '<td>و هرگونه جزئیات بیشتر در اینجا (تصاویر و غیره)...</td>'+
        '</tr>'+
    '</table>';
}
 
$(document).ready(function() {
    var table = $('#child_rows').DataTable( {
        // "ajax": "../../plugins/datatables/objects.txt",
        "data": testdata.data,
        select:"single",
        "columns": [
            {
                "className":      'details-control',
                "orderable":      false,
                "data":           null,
                "defaultContent": ''
            },
            { "data": "name" },
            { "data": "position" },
            { "data": "office" },
            { "data": "salary" }
        ],
        "order": [[1, 'asc']]
    } );
     
    // Add event listener for opening and closing details
    $('#child_rows tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row( tr );
 
        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child( format(row.data()) ).show();
            tr.addClass('shown');
        }
    } );
} );

var testdata = {
    "data": [
    {
    "name": "تاجر نیکسون",
    "position": "معمار سیستم",
    "salary": "320,800 تومان",
    "start_date": "1400/04/25",
    "office": "ادیبنبورگ",
    "extn": "5421"
    },
    {
    "name": "زمستان های گرت",
    "position": "حسابدار",
    "salary": "170,750 تومان",
    "start_date": "1400/07/25",
    "office": "توکیو",
    "extn": "8422"
    },
    {
    "name": "اشتون کاکس",
    "position": "نویسنده فنی جوان",
    "salary": "86,000 تومان" ,
    "start_date": "1400/01/12",
    "office": "سانفرانسیسکو",
    "extn": "1562"
    },]}