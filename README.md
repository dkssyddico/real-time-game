# Realtime Game

> Realtime Drawing Game built with SocketIO, Gulp and Node

## To Do:

- [x] Server
- [x] Pug
- [x] Eslint
- [x] Static
- [ ] SocketIO

## What I learnt:

### HTTP

- 서버가 유저를 기억하게 하는 유일한 방법은 **쿠키**를 보내는 방법뿐!
- 쿠키는 서버로 보내지고, 서버는 쿠키를 통해 유저를 인식하고 유저에게 응답을 해준다.
- **Stateless**
  - Request가 보내지면 서버가 처리를 하면 끝나는 것.
  - 페이지가 한 번 보여지면 연결을 유지할 필요가 없다는 뜻.
  - get, post, put
- 유저와 서버가 서로 대화(request, 응답)가 끝나면 서버와 연결이 완전히 끊긴다.

<br>

### Web Socket

- 한 번 연결되면 서버는 연결을 끊지 않는다.
- 서버와 계속 연결이 유지되어 있음
- 그래서 서버가 유저를 계속 기억할 수 있다.
- 다른 유저가 들어오면 다른 유저와도 연결되는데 똑같이 계속 연결이 유지된다: **Stateful**
- 대신 서버에 많은 메모리를 유지하는 데, 그건 서버가 두 유저를 모두 기억해야하기 때문!
- HTTP처럼 그때 그때 요청(request)을 받아서 응답하는 것이 아니라 연결이 유지되고 있는 통로로 유저에게 응답하는 것
- 어떤 정보나 패킷같은 것을 전송하면 연결이 유지되고 있는 통로로 소통하면 됨

<br>

### ETC:

- WS와 HTTP는 같은 서버에 존재할 수 있다.

<br>

## Reference

- [Socket.IO](https://socket.io/)
