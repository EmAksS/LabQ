/* @refresh reload */
import { render } from 'solid-js/web'
import './index.css'
import App from './solid/app/App.tsx'

const root = document.getElementById('root')

render(() => <App />, root!)
