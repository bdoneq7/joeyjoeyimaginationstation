import React, { useEffect } from "react";

const StripePricingTable = () => {

useEffect(() => {
const script = document.createElement("script");
script.src = "https://js.stripe.com/v3/pricing-table.js";
script.async = true;
document.body.appendChild(script);

return () => {
document.body.removeChild(script);
};

}, []);

return React.createElement("stripe-pricing-table", {
"pricing-table-id": "prctbl_1OT7xcLCcJ68aY6LvqiLRT6e",
"publishable-key": "pk_live_51IqURFLCcJ68aY6LPWagifSMjKqmp0Rld1FZQhfSH7NXfJCIWmQNNIWfCIpVAV9FzHm8h9GruOakwuPBXN2N7TfE00Ow8I0ras",
});
};

export default StripePricingTable;