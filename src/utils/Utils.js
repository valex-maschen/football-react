import { uri } from 'url-routes-generator';


function generateUri(route, params) {
    return uri(route, params)(undefined);
};

export default {
    generateUri,
}