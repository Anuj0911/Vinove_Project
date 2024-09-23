// Sample data for the members and their location details
const members = [
    {
      name: 'John Doe',
      status: 'Present',
      locations: [
        { lat: 37.7749, lng: -122.4194, time: '10:00 AM' },
        { lat: 37.7849, lng: -122.4294, time: '12:00 PM' },
      ],
    },
    {
      name: 'Jane Smith',
      status: 'Absent',
      locations: [],
    },
    {
      name: 'Mark Taylor',
      status: 'Present',
      locations: [
        { lat: 37.7549, lng: -122.4094, time: '09:30 AM' },
        { lat: 37.7949, lng: -122.4494, time: '01:00 PM' },
      ],
    },
  ];
  
  // Function to populate members list
  function populateMemberList() {
    const memberList = document.getElementById('member-list');
    memberList.innerHTML = ''; // Clear the existing table rows if any
  
    members.forEach((member, index) => {
      const row = document.createElement('tr');
  
      const nameCell = document.createElement('td');
      nameCell.textContent = member.name;
      row.appendChild(nameCell);
  
      const statusCell = document.createElement('td');
      statusCell.textContent = member.status;
      row.appendChild(statusCell);
  
      const actionCell = document.createElement('td');
      const viewLocationButton = document.createElement('button');
      viewLocationButton.textContent = 'View Location';
      viewLocationButton.addEventListener('click', () => viewLocation(index));
      actionCell.appendChild(viewLocationButton);
  
      row.appendChild(actionCell);
      memberList.appendChild(row);
    });
  }
  
  // Function to show member location on map and timeline
  function viewLocation(index) {
    const member = members[index];
    if (member.locations.length > 0) {
      const mapContainer = document.getElementById('map-container');
      const map = new google.maps.Map(mapContainer, {
        center: member.locations[0],
        zoom: 13,
      });
  
      member.locations.forEach((location) => {
        const marker = new google.maps.Marker({
          position: location,
          map: map,
        });
      });
  
      const timeline = document.getElementById('location-timeline');
      timeline.innerHTML = ''; // Clear any previous data
      member.locations.forEach((location) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${location.time} - Latitude: ${location.lat}, Longitude: ${location.lng}`;
        timeline.appendChild(listItem);
      });
    } else {
      alert('No location data available for this member.');
    }
  }
  
  // Initialize page
  document.addEventListener('DOMContentLoaded', () => {
    populateMemberList(); // This function ensures the list gets populated on page load
  });
  