import { getStatsAction, getChartsDataAction } from "@/utils/actions";
import { log } from "console";
async function StatsPage() {getStatsAction();
  const charts = await getChartsDataAction();
  console.log(charts);

    return <h1 className='text-4xl'>StatsPage</h1>;  
  };
  export default StatsPage;
  