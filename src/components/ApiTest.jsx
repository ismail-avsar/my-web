import axios from "axios";
import { postData } from "../data/data";

function ApiTest() {
    const sendPost = async () => {
        try {
            const response = await axios.post(
                " https://reqres.in/api/workintech",
                postData
            );

            console.log("POST RESPONSE:", response.data);
        } catch (error) {
            console.error("POST ERROR:", error);
        }
    };

    return (
        <section>
            <h2>API Test</h2>
            <button onClick={sendPost}>
                POST İSTEĞİ GÖNDER
            </button>
        </section>
    );
}

export default ApiTest;
