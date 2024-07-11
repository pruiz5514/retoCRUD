var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ListUsers } from "./classes/ListUsers.js";
import { Users } from "./classes/Users.js";
const container = document.querySelector(".item-list");
const mainContainer = new ListUsers(container);
const getUser = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch("http://localhost:3000/users");
        const data = yield response.json();
        return data;
    }
    catch (error) {
        return "error";
    }
});
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield getUser();
    if (typeof (data) == "string") {
        alert("Error");
    }
    else {
        data.map((user) => {
            const userCard = new Users(user.id, user.name, user.email, user.avatar);
            mainContainer.renderCards(userCard.id, userCard.name, userCard.email, userCard.avatar);
        });
    }
}));
