import * as pr from 'pareto-core-raw'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pr.wrapRawDictionary

import { $ as api } from "./api.data"

export const $: mproject.TProject = {
    'author': "Corno",
    'description': "ugly functions that are sometimes needed",
    'license': "ISC",

    'pubdependencies': d({
    }),
    'type': ['resource', {
        'definition': api,
        'devDependencies': d({}),
        'test': {
            'dependencies': d({
            }),
        }
    }],
}