/*
 * Update Xcode config file
 */
const updateXcodeProj = (xcodeProjFileObj, bundleId) => new Promise((resolve, reject) => {
    try {
        resolve({
            path: xcodeProjFileObj.path,
            content: xcodeProjFileObj.content.replace(/PRODUCT_BUNDLE_IDENTIFIER\s[\w|\.]+;/i, `PRODUCT_BUNDLE_IDENTIFIER "${bundleId}";`)
        });
    } catch (updateError) {
        reject(updateError);
    }
});

module.exports = updateXcodeProj;
