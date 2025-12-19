import axios from "axios";
import { postData } from "../data/data";

function ApiTest() {
    const sendPost = async () => {
        try {
            const response = await axios.post(
                "https://reqres.in/api/users",
                postData
            );

            console.log("POST SUCCESS:", response.data);
            alert("POST isteği gönderildi (console'u kontrol et)");
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
