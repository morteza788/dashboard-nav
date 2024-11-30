/**
* Theme: Dastyle - Responsive Bootstrap 4 Admin Dashboard
* Author: themes
* Component: Full-Calendar
*/
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'interaction', 'dayGrid', 'timeGrid' ],
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      defaultDate: '2020-06-12',
      navLinks: true, // can click day/week names to navigate views
      selectable: true,
      selectMirror: true,
      locale:'fa',
      buttonText: {
        prev: 'قبلی',
        next: 'بعدی',
        today: 'امروز',
        month: 'ماه',
        week: 'هفته',
        day: 'روز',
        list: 'برنامه',
      },
      weekText: 'هف',
      allDayText: 'تمام روز',
      direction: 'rtl',
      select: function(arg) {
        var title = prompt('عنوان:');
        if (title) {
          calendar.addEvent({
            title: title,
            start: arg.start,
            end: arg.end,
            allDay: arg.allDay
          })
        }
        calendar.unselect()
      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'ناهار کاری',
          start: '2020-06-03T13:00:00',
          constraint: 'businessHours',
          className: 'bg-soft-warning',
        },
        {
          title: 'ملاقات',
          start: '2020-06-13T11:00:00',
          constraint: 'availableForMeeting', // defined below
          className: 'bg-soft-purple',
          textColor: 'white'
        },
        {
          title: 'کنفرانس',
          start: '2020-06-27',
          end: '2020-06-29',
          className: 'bg-soft-primary',
        },
        

        // areas where "Meeting" must be dropped
        {
          groupId: 'availableForMeeting',
          start: '2020-06-11T10:00:00',
          end: '2020-06-11T16:00:00',
          title: 'تکرار رویداد',
          className: 'bg-soft-purple',
        },
        {
          groupId: 'availableForMeeting',
          start: '2020-06-15T10:00:00',
          end: '2020-06-15T16:00:00',
          title: 'تعطیل',
          className: 'bg-soft-success',
        },

        // red areas where no events can be dropped
        
        {
          start: '2020-06-06',
          end: '2020-06-08',
          overlap: false,
          title: 'رویداد جدید',
          className: 'bg-soft-pink',
        }
      ],
      eventClick: function(arg) {
        if (confirm('رویداد را حذف کنید؟')) {
          arg.event.remove()
        }
      }
    });

    calendar.render();
  });


  // light_datepick
new Lightpick({
  field: document.getElementById('light_datepick'),
  inline: true,                
});