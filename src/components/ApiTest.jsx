import axios from "axios";
import { postData } from "../data/data";

function ApiTest() {
    const sendPost = async () => {
        try {
            const response = await axios.post("https://reqres.in/api/workintech", postData);
            console.log("SUCCESS:", response.data);
            alert("Veri başarıyla gönderildi!");
        } catch (error) {
            console.error("ERROR:", error);
        }
    };

    return (
        <section className="py-12 my-20 text-center border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-3xl">
            <h2 className="text-xl font-bold mb-6 text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                API Connection Test
            </h2>
            <button
                onClick={sendPost}
                className="api-btn-fixed px-10 py-4 rounded-xl font-bold shadow-2xl hover:scale-105 transition-all cursor-pointer active:translate-y-1"
            >
                POST DATA TO API
            </button>
        </section>
    );
}
export default ApiTest;