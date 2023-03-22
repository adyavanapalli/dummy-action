import * as core from '@actions/core';

async function run() {
    const x = core.getInput('x');

    core.setOutput('y', x.toUpperCase());
}

run();
