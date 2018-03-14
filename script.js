
var runUnCheckUnchecked = true;

function uncheck() {
  try {
    var checkbox = document.getElementById('notifyWatchers');
    console.log('checkbox', checkbox);
    
    if (checkbox && checkbox.checked == false) {
      console.log('checkbox is not checked');
    } else if (checkbox && checkbox.dataset.alreadyUnchecked == 'true') {
      console.log('checkbox has already been set by this script');
    } else if (checkbox && checkbox.checked == true && checkbox.dataset.alreadyUnchecked != 'true') {
      console.log('about to click');
      checkbox.click();
      checkbox.dataset.alreadyUnchecked = 'true';
    }

    if (checkbox && checkbox.dataset.alreadyUnchecked === 'true') {
      console.log('my work here is done.');
      runUnCheckUnchecked = false;
      return;
    }

  } catch (e) {
    console.log(e);
  }
}


function checkAndWait () {
  if (runUnCheckUnchecked === true) {
    uncheck();
    setTimeout(checkAndWait, 3000);
  }
}

checkAndWait();
