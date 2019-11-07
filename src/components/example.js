import React, {Component} from 'react';
import { PayPalButton } from "react-paypal-button-v2";

export default class Example extends Component {
    render() {
        return (
            <PayPalButton style={{shape: 'pill',
            color: 'black',
            layout: 'vertical'
          }}
                amount="100"
                onSuccess={(details, data) => {
                    alert("Transaction completed by " + details.payer.name.given_name);

                    // OPTIONAL: Call your server to save the transaction
                    return fetch("/paypal-transaction-complete", {
                        method: "post",
                        body: JSON.stringify({
                            orderId: data.orderID
                        })
                    });
                }}
                options={{
                    clientId: "AXoBqu-IeEYwhLM705RJQp5MAZ378EwiqSLlnGh1w079ioHPsvoFVeIK5HeTBv4FmFkdQHmREh7tyyHJ"
                }}
            />
        );
    }
}
