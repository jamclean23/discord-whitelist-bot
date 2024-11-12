// Main App

export default function IndexPage (props) {
  return (
    <>
      <h1>Whitelisting Bot</h1>

      <h2>Description</h2>

      <p>
        The purpose of this bot is to update a Squad server whitelist, 
        given the subscription status of the user.
      </p>
      <p>
        There a few different elements used to achieve this goal.
      </p>
      <ul>
        <li>
          A Postgres database for storing users' linked emails and Steam IDs.
        </li>
        <li>
          Handlers for Patreon webhooks when a user updates their subscription status. <br/>
          The webhook provides the user's email and subscription level. <br/>
          The handler updates the whitelist if the user has adequate subscription level.
        </li>
        <li>
          Discord bot slash commands for linking a Steam ID with the user's email.
        </li>
        <li>
          A Node js mailer for sending validation emails after the slash command has been entered. <br/>
          This could be implemented into the existing slash command for seed-linking.
        </li>
      </ul>

    </>
  )
}