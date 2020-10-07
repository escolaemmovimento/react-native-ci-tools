const xcodeProjFileBasePath = '*.xcodeproj';

const process = (iosProjectPath, payload, strategy) => {
    const xcodeProjPath = `${iosProjectPath}/${xcodeProjFileBasePath}`;
    strategy.utils.log.info(`Cheking xcodeproj file ${xcodeProjFileBasePath}`);
    return strategy.utils.checkPath(strategy.fileSystem, xcodeProjPath, false)
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