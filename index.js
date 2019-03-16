import {MDCTextField} from '@material/textfield/index';
import {MDCTopAppBar} from '@material/top-app-bar/index';
import {MDCList} from "@material/list";
import {MDCDrawer} from "@material/drawer";

// Instantiation
const textFields = document.querySelectorAll('.mdc-text-field');
for (const textField of textFields) {
  MDCTextField.attachTo(textField);
}

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar1 = new MDCTopAppBar(topAppBarElement);

const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});

const list = MDCList.attachTo(document.querySelector('.mdc-list'));
list.wrapFocus = true;
