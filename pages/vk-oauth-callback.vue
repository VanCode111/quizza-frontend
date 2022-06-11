<template>
    
</template>

<script>
export default {
    data() {

    },
    methods: {

    },
    mounted() {
        let oAuthCallbackEvent = new CustomEvent("OAuthCallback", {'detail': window.location.hash});
        window.opener.dispatchEvent(oAuthCallbackEvent);
        window.close();
    }
};
</script>


