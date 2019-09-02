const MainView = /* html */`
<section class="main">
    <header>
        <div></div>
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
            <source src="https://connect.or.kr/connectfoundation_/video/home_bg.mp4" type="video/mp4" poster="resources/img/bg_home@p.jpg">
        </video>

        <div class="container h-100; text-white">
            <div class="form-signin">
                <form>
                    <h1 class="login-title mb-3 font-weight-bold">Awesome-Todo</h1>
                    <label for="inputEmail" class="sr-only">이메일</label>
                    <input type="email" id="inputEmail" class="form-control" placeholder="이메일" required="" autofocus="">
                    <label for="inputPassword" class="sr-only">비밀번호</label>
                    <input type="password" id="inputPassword" class="form-control" placeholder="비밀번호" required="">
                    <div class="mb-3"></div>
                    <button id="login" class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
                <a href="./#signup">
                    <button class="mt-2 btn btn-lg btn-secondary btn-block">Sign up</button>
                </a>
            </div>
        </div>
    </header>
</section>
`;

export default MainView;
