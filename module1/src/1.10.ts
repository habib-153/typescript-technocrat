{
    // Union type
    type FrontendDeveloper = 'SeniorDev' | 'juniorDev'

    const newDeveloper : FrontendDeveloper = 'juniorDev'
}
{
    // intersection
    type FrontendDeveloper = {
        skills: string[],
        designation1: 'FrontendDeveloper'
    }
    type BackendDeveloper = {
        skills: string[],
        designation2: 'BackendDeveloper'
    }

    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper
    const fullStackDeveloper : FullStackDeveloper = {
        skills: ['HTML', "Js", "Express"],
        designation1:'FrontendDeveloper',
        designation2:'BackendDeveloper'
    }
}