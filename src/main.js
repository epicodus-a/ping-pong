import {pingPong} from './ping-pong';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$().ready(() => {
	// debugger;
	console.log('ha ');
	$(".ping-pong-form").submit(e => {
		e.preventDefault();
		let goal = $("#goal").val();
		let outputs = pingPong(goal);
		outputs.forEach(output => {
			$("#solution").append(`<p class="lead">${output}</p>`);
		});
	});
});