/* staff section dynmically */

const items = [
  {
    profilePic: 'img/person2.jpg',
    name: 'Mohamed Eos',
    jobDescr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus expedita nobis quae repellat et?',
  },
  {
    profilePic: 'img/person1.jpg',
    name: 'Sophronia Yauhen',
    jobDescr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus expedita nobis quae repellat et?',
  },
  {
    profilePic: 'img/person3.jpg',
    name: 'Shahid Otmar',
    jobDescr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus expedita nobis quae repellat et?',
  },
  {
    profilePic: 'img/person4.jpg',
    name: 'Petar Jeconiah',
    jobDescr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus expedita nobis quae repellat et?',
  },
  {
    profilePic: 'img/person5.jpg',
    name: 'Vênus Tafadzwa',
    jobDescr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus expedita nobis quae repellat et?',
  },
  {
    profilePic: 'img/person6.jpg',
    name: 'Jeffery Sarvesh',
    jobDescr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus expedita nobis quae repellat et?',
  },
];

for (let i = 0; i < items.length; i += 1) {
  const data = document.createElement('div');
  data.classList.add('staff-items');
  data.innerHTML = `
  <div class="staff-item">
  <div class="staff-img">
        <img src="img/chessbg.jpg" alt="back" class="back"/> 
        <img src="${items[i].profilePic}" alt="staff" class="profile"/> 
      </div>
      <div class="staff-info">
      <h2>${items[i].name}</h2>
      <i class="job">${items[i].jobDescr}</i>
      <span></span>
      <p>${items[i].comment}</p>
    </div>
</div>
  `;

  document.querySelector('.staff-members').appendChild(data);
}