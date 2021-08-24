<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
// import UsersList from './components/UsersList.vue';
export default {
  // components: { UsersList },
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paraIsVisible: false,
      showUsers: false,
      enterInterval: null,
      leaveInterval: null
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animatedBlock = !this.animatedBlock;
    },
    toggleUsers() {
      this.showUsers = !this.showUsers;
    },
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      const time = 1 * 1000;
      const rounds = 100;

      let c = 0;
      this.enterInterval = setInterval(() => {
        el.style.opacity = c * (1 / rounds);
        c++;
        if (c > rounds) {
          clearInterval(this.enterInterval);
          done();
        }
      }, time / rounds);
    },
    // afterEnter(el) {
    //   console.log('afterEnter');
    // },
    beforeLeave(el) {
      el.style.opacity = 1;
    },
    leave(el, done) {
      const time = 1 * 1000;
      const rounds = 100;

      let c = rounds;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = c * (1 / rounds);
        c--;
        if (c < 0) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, time / rounds);
    },
    // afterLeave(el) {
    //   console.log('afterLeave');
    // },
    enterCancelled() {
      console.log('enterCancelled');
      clearInterval(this.enterInterval);
    },
    leaveCancelled(el, a, b) {
      console.log('leaveCancelled');
      console.log(el, a, b);
      clearInterval(this.leaveInterval);
    }
  },
  computed: {
    usersButton() {
      return this.showUsers ? 'Hide Users' : 'Show Users';
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  animation: slide-scale 0.5s ease-out forwards;
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}

/* .para-enter-from,
.para-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.para-enter-active,
.para-leave-active {
  transition: all 0.25s ease-in-out;
}

.para-enter-to,
.para-leave-from {
  opacity: 1;
  transform: translateY(0);
}
 */

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.25s ease-in;
}
.fade-button-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}



.route-enter-active {
  animation: slide-scale 0.4s ease-out reverse;
}

.route-leave-active {
  animation: slide-scale 0.4s ease-in;
}
</style>
