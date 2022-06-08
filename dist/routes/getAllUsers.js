"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAllUsers(request, response) {
    const users = [
        {
            name: 'John',
            age: 30
        },
        {
            name: 'Peter',
            age: 40
        }
    ];
    response.statusCode = 200;
    response.send({ users });
}
exports.default = getAllUsers;
//# sourceMappingURL=getAllUsers.js.map