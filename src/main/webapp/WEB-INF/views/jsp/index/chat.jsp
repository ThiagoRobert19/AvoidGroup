<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />
<c:import url="/WEB-INF/cabecalho/menu.jsp" />
<section class="interface">
	<div class="container gedf-wrapper">
		<hr class="invisible">
		<div class="row">
			<div class="col-md-12 col-xl-1"></div>
			<div class="col-md-12 col-xl-11">
				<div id="username-page">
					<div class="username-page-container">
						<h1 class="title">Type your username</h1>
						<form id="usernameForm" name="usernameForm">
							<div class="form-group">
								<input type="text" id="name" placeholder="Username"
									autocomplete="off" class="form-control" />
							</div>
							<div class="form-group">
								<button type="submit" class="accent username-submit">Start
									Chatting</button>
							</div>
						</form>
					</div>
				</div>

				<div id="chat-page">
					<div class="chat-container">
						<div class="chat-header">
							<h2>Spring WebSocket Chat Demo</h2>
						</div>
						<div class="connecting">Connecting...</div>
						<ul id="messageArea">
							<li>aquiiiii</li>
						</ul>
						<form id="messageForm" name="messageForm" nameForm="messageForm">
							<div class="form-group">
								<div class="input-group clearfix">
									<input type="text" id="message" placeholder="Type a message..."
										autocomplete="off" class="form-control" />
									<button type="submit" class="primary">Send</button>
								</div>
							</div>
						</form>
					</div>
				</div>


			</div>
		</div>


	</div>
</section>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/sockjs-client/1.1.4/sockjs.min.js"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/stomp.js/2.3.3/stomp.min.js"></script>
<!-- -script src="<c:url value='/resources/_js/main.js'/>"></script-->



<script type="text/javascript">
	'use strict';

	var usernamePage = document.querySelector('#username-page');
	var chatPage = document.querySelector('#chat-page');
	var usernameForm = document.querySelector('#usernameForm');
	var messageForm = document.querySelector('#messageForm');
	var messageInput = document.querySelector('#message');
	var messageArea = document.querySelector('#messageArea');
	var connectingElement = document.querySelector('.connecting');

	var stompClient = null;
	var username = null;

	var colors = [ '#2196F3', '#32c787', '#00BCD4', '#ff5652', '#ffc107',
			'#ff85af', '#FF9800', '#39bbb0' ];

	function connect(event) {
		console.log("cheguei");

		var socket = new SockJS('http://localhost:8080/AvoidGroup/ws');

		stompClient = Stomp.over(socket);
		console.log("conectar");
		stompClient.connect({}, onConnected, onError);

		event.preventDefault();

	}

	function onConnected() {
		console.log("conectado");
		
		stompClient.subscribe('http://localhost:8080/AvoidGroup/topic/public',
				onMessageReceived);

		stompClient.send("http://localhost:8080/AvoidGroup/app/chataddUser",
				{}, JSON.stringify({
					sender : username,
					type : 'JOIN'
				}))

		connectingElement.classList.add('hidden');
	}

	function onError(error) {

		connectingElement.textContent = 'Could not connect to WebSocket server. Please refresh this page to try again! '
				+ error;
		connectingElement.style.color = 'red';
	}

	function sendMessage(event) {
		console.log("entra no send message");
		var messageContent = messageInput.value.trim();

		if (messageContent && stompClient) {
			var chatMessage = {
				sender : username,
				content : messageInput.value,
				type : 'CHAT'
			};

			stompClient.send(
					"http://localhost:8080/AvoidGroup/app/chatsendMessage",
					{}, JSON.stringify(chatMessage));
			messageInput.value = '';
		}
		event.preventDefault();
	}

	function onMessageReceived(payload) {
		var message = JSON.parse(payload.body);

		var messageElement = document.createElement('li');

		if (message.type === 'JOIN') {
			messageElement.classList.add('event-message');
			message.content = message.sender + ' joined!';
		} else if (message.type === 'LEAVE') {
			messageElement.classList.add('event-message');
			message.content = message.sender + ' left!';
		} else {
			messageElement.classList.add('chat-message');

			var avatarElement = document.createElement('i');
			var avatarText = document.createTextNode(message.sender[0]);
			avatarElement.appendChild(avatarText);
			avatarElement.style['background-color'] = getAvatarColor(message.sender);

			messageElement.appendChild(avatarElement);

			var usernameElement = document.createElement('span');
			var usernameText = document.createTextNode(message.sender);
			usernameElement.appendChild(usernameText);
			messageElement.appendChild(usernameElement);
		}

		var textElement = document.createElement('p');
		var messageText = document.createTextNode(message.content);
		textElement.appendChild(messageText);

		messageElement.appendChild(textElement);

		messageArea.appendChild(messageElement);
		messageArea.scrollTop = messageArea.scrollHeight;
	}

	function getAvatarColor(messageSender) {
		var hash = 0;
		for (var i = 0; i < messageSender.length; i++) {
			hash = 31 * hash + messageSender.charCodeAt(i);
		}

		var index = Math.abs(hash % colors.length);
		return colors[index];
	}

	usernameForm.addEventListener('submit', connect, true)
	messageForm.addEventListener('submit', sendMessage, true)
</script>

<c:import url="/WEB-INF/cabecalho/footer.jsp" />