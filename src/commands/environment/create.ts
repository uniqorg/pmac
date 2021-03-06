import { Command, Flags } from '@oclif/core'

import { fsWorkspaceManager, fsWorkspaceResourceManager } from '../../file-system'

import inquirer from 'inquirer'
import { EnterNameAction, PMACEnvironmentCreateAction, PMACWorkspaceChooseAction, PMACWorkspaceGetAllAction } from '../../postman/actions'
import { PostmanEnvironment, PostmanEnvironmentValueType } from '../../postman/api/types'
import { buildPMACEnvironmentValues } from '../../commands-helpers/environment/environment-commands-shared.helper'

export default class EnvironmentCreate extends Command {
  static description = 'Creates a new PM environment.'

  static examples = [
    `$pmac environment create 
`,
  ]

  static flags = {
    dotEnvPath: Flags.string({
      char: 'e',
      helpValue: 'my/custom/path/to/.env',
      description: 'Specify a relative path to a .env file, to copy values to, [Do not take .env as default!]',
      required: true,
    }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(EnvironmentCreate)

    const pmacWorkspaces = await new PMACWorkspaceGetAllAction(
      fsWorkspaceManager,
    ).run()

    const pmacWorkspace = await new PMACWorkspaceChooseAction(
      inquirer,
      pmacWorkspaces,
    ).run()

    const { chosenName } = await new EnterNameAction(
      inquirer,
      'Enter a name for the new PM environment',
    ).run()

    const newPMEnvironment: Pick<PostmanEnvironment, 'name' | 'values'> = {
      name: chosenName,
      values: [
        {
          enabled: true,
          key: 'exampleVariable',
          value: '42',
          type: PostmanEnvironmentValueType.Text,
        },
      ],
    }

    if (flags.dotEnvPath) {
      newPMEnvironment.values = buildPMACEnvironmentValues(flags.dotEnvPath)
    }

    await new PMACEnvironmentCreateAction(
      fsWorkspaceManager,
      fsWorkspaceResourceManager,
      pmacWorkspace,
      newPMEnvironment,
    ).run()

    this.log(
      `Environment ${newPMEnvironment.name} created successfully.`,
    )
  }
}
