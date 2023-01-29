<!-- 

<header>
    <nav class="navbar">
        <div class="navbar_logo">
            <i class="fa-solid fa-school"></i>
            DAESHIN Teacher's
        </div>
        <ul class="navbar_menu">

            <li >
                <a href="/board"> 3학년 게시판</a>
            </li>
            <li >
                <a href="/phone_student"> 학생전화</a>
            </li>
            <li >
                <a href="/phone_teacher"> 교사전화</a>
            </li>
            <li >
                <a href="/docs"> 문서열람</a>
            </li>
            <li >
                <a href="/down"> 양식다운로드</a>
            </li>
            <li >
                <a href="/todo"> ToDo</a>
            </li>
        </ul>
        <div class="navbar_icon">
            <i class="fa-solid fa-feather"></i>
        </div>
        <div class="navbar_toggle_bar" >
            <i class="fas fa-bars"></i>
        </div>
    </nav>
</header>
<div id='main'>
  <slot></slot>
</div>

<div class="footer">대신고등학교</div>

<style>

#main {
  margin-top: 50px;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #263343;
    padding: 4px 8px;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;
    position: fixed;
    margin-top: 0;
    width: 90vw;
}

.navbar_logo {
    font-size: 24px;
    color: white;
}

.navbar_logo i {
    color: #d49466;
}

.navbar_menu {
    display: flex;
    list-style: none;
    padding-left: 0;
    align-items: center;
}

.navbar_menu li {
    padding: 8px 12px;
    color: white;
}

.navbar_menu li:hover {
    background-color: #d49466;
    border-radius: 4px;
    cursor: pointer;
}

.navbar_icon {
    color: #263343;
}

.navbar_toggle_bar {
    display: none;
    list-style: none;
    color: #d49466;
    position: absolute;
    right: 32px;
    font-size: 24px;
}

.footer {
    text-align: center;
    color: white;
    background-color: #263343;
    size: 0.5rem;
    padding: 3px;
    margin: 0;
    position: fixed;
    bottom: 0;
    width: 100vw;
}

@media screen and (max-width: 768px) {
    .navbar {
        flex-direction: column;
        align-items: flex-start;
        padding: 8px 24px;
    }

    .navbar_menu {
        flex-direction: column;
        align-items: center;
        width: 100%;
        display: none;
    }

    .navbar_icon {
        display: none;
    }

    .navbar_toggle_bar {
        display: block;
    }

    li {
        list-style-type: none;
        color: black;
    }

    i {
        color: red;
    }

}
</style> -->

<script>
import {
    onMount
} from "svelte";

// Show mobile icon and display menu
let showMobileMenu = false;

// List of navigation items
const navItems = [{
        label: "대신고등학교",
        href: "/"
    },
    {
        label: "3학년게시판",
        href: "/board"
    },
    {
        label: "학생전화",
        href: "phone_student"
    },
    {
        label: "교사전화",
        href: "phone_teacher"
    },
    {
        label: "문서열람",
        href: "docs"
    },
    {
        label: "다운로드",
        href: "down"
    },
    {
        label: "ToDo",
        href: "todo"
    }
];

// Mobile menu click event handler
const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);

// Media match query handler
const mediaQueryHandler = (e) => {
    // Reset mobile state
    if (!e.matches) {
        showMobileMenu = false;
    }
};

// Attach media query listener on mount hook
onMount(() => {
    const mediaListener = window.matchMedia("(max-width: 767px)");

    mediaListener.addListener(mediaQueryHandler);
});
</script>

<nav>
  <div class="inner" >
    <div on:click={handleMobileIconClick} class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
      <div class="middle-line"></div>
    </div>
    <ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
      {#each navItems as item}
        <li>
          <a href={item.href}>{item.label}</a>
        </li>
      {/each}
    </ul>
  </div>
</nav>
<slot><!-- optional fallback --></slot>

<style>
  slot {
    position:relative;
    z-index: 1;
  }
  nav {
    background-color: rgba(26, 33, 43, 0.8);
    font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    height: 45px;
    position:relative; 
    z-index: 3;

  }

  .inner {
    max-width: 980px;
    padding-left: 20px;
    padding-right: 20px;
    margin: auto;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 100%;
  }

  .mobile-icon {
    width: 25px;
    height: 14px;
    position: relative;
    cursor: pointer;
  }

  .mobile-icon:after,
  .mobile-icon:before,
  .middle-line {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #fff;
    transition: all 0.4s;
    transform-origin: center;
  }

  .mobile-icon:before,
  .middle-line {
    top: 0;
  }

  .mobile-icon:after,
  .middle-line {
    bottom: 0;
  }

  .mobile-icon:before {
    width: 66%;
  }

  .mobile-icon:after {
    width: 33%;
  }

  .middle-line {
    margin: auto;
  }

  .mobile-icon:hover:before,
  .mobile-icon:hover:after,
  .mobile-icon.active:before,
  .mobile-icon.active:after,
  .mobile-icon.active .middle-line {
    width: 100%;
  }

  .mobile-icon.active:before,
  .mobile-icon.active:after {
    top: 50%;
    transform: rotate(-45deg);
  }

  .mobile-icon.active .middle-line {
    transform: rotate(45deg);
  }

  .navbar-list {
    display: none;
    width: 100%;
    justify-content: space-between;
    margin: 0;
    padding: 0 40px;
  }

  .navbar-list.mobile {
    background-color: rgba(26, 33, 43, 0.8);
    position: fixed;
    display: block;
    height: calc(100% - 45px);
    bottom: 0;
    left: 0;
  }

  .navbar-list li {
    list-style-type: none;
    position: relative;
  }

  .navbar-list li:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #424245;
  }

  .navbar-list a {
    color: #fff;
    text-decoration: none;
    display: flex;
    height: 45px;
    align-items: center;
    padding: 0 10px;
    font-size: 13px;
  }

  @media only screen and (min-width: 767px) {
    .mobile-icon {
      display: none;
    }

    .navbar-list {
      display: flex;
      padding: 0;
    }

    .navbar-list a {
      display: inline-flex;
    }
  }
</style>
