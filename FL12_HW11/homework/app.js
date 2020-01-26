const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

// Todo: your code goes here

const rootNodeList = document.createElement('ul');
for (const element of structure) {
  renderItem(element, rootNodeList);
}
rootNode.appendChild(rootNodeList);

function renderItem(item, parentNode) {
  const itemNode = document.createElement('li');

  const titleNode = document.createElement('div');

  const titleIconNode = document.createElement('i');
  titleIconNode.className = 'material-icons ';
  const titleTextNode = document.createElement('span');
  titleTextNode.innerText = item.title;

  if(item.folder) {
    titleNode.addEventListener('click', folderClickHandle);
    const itemChildrenListNode = document.createElement('ul');
    itemChildrenListNode.className += 'hidden';
    if(item.children) {
      for (const element of item.children) {
        renderItem(element, itemChildrenListNode);
      }
    } else {
      const emptyTextNode = document.createElement('em');
      emptyTextNode.innerText = 'Folder is empty';
      itemChildrenListNode.appendChild(emptyTextNode);
    }

    titleIconNode.innerText = 'folder';

    titleNode.appendChild(titleIconNode);
    titleNode.appendChild(titleTextNode);

    itemNode.appendChild(titleNode);
    itemNode.appendChild(itemChildrenListNode);
  } else {
    titleIconNode.innerText = 'insert_drive_file';
    titleIconNode.className += 'file ';

    titleNode.appendChild(titleIconNode);
    titleNode.appendChild(titleTextNode);

    itemNode.appendChild(titleNode);
  }

  parentNode.appendChild(itemNode);
}

function folderClickHandle() {
  const childrenListNode = this.nextElementSibling;
  if (childrenListNode.className === 'hidden') {
    this.firstElementChild.innerText = 'folder_open';
    childrenListNode.className = '';
  } else {
    this.firstElementChild.innerText = 'folder';
    childrenListNode.className = 'hidden';
  }
}