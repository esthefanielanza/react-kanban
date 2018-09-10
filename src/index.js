import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import KanbanContainer from './containers/Kanban';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<KanbanContainer />, document.getElementById('root'));
registerServiceWorker();
