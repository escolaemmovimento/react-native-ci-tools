const xcodeProjFileBasePath = '*.xcodeproj';

const process = (iosProjectPath, payload, strategy) => {
    const xcodeProjPattern = `${iosProjectPath}/${xcodeProjFileBasePath}`;
    strategy.utils.log.info(`Cheking xcodeproj file ${xcodeProjFileBasePath}`);
    return strategy.utils.globSearch(strategy.globber, xcodeProjPattern, false)
        .then(fileSearchResults => {
            if (fileSearchResults) {
                if (fileSearchResults.length == 1) {
                    return fileSearchResults[0];
                }
                throw new Error(`Unable to determine iOS Project file, found (${fileSearchResults.length}) matches`);
            }
            throw new Error(`Unable to find iOS Project file, search directory (${fileSearchResults.length}) matches`);
        })
        .then(iosProjectFilePath => {
            strategy.utils.log.sucess(`+ iOS Project file is accessable and writeable was`);
            strategy.utils.log.info(`Reading iOS Project file`);
            return strategy.utils.readFile(strategy.fileSystem, iosProjectFilePath);
        }).then(iosProjectFileObj => {
            strategy.utils.log.sucess(`+ OS Project file loaded into memory`);
            strategy.utils.log.info(`Reading iOS Project file`);
            return strategy.updaters.xcodeProjUpdater(iosProjectFileObj, payload.bundleId);
        });
};

module.exports = { process };