let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

  function contains(element) {
    for (i = 0; i < destinations.length; i += 1) {
      if (element === destinations[i]) {
        return true;
      } 
    }

    return false;
  }

  console.log(contains('Barcelona'));
  console.log(contains('Nashville'));