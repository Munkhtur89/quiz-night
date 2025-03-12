import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MyAccordionContent from "@/components/admin/accordionContent";

export default function AdminPage() {
  const [tuesdayData, setTuesdayData] = useState([]);
  const [thursdayData, setThursdayData] = useState([]);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [rookieTeamInfo, setRookieTeamInfo] = useState({});
  const [mainTeamInfo, setMainTeamInfo] = useState({});
  const [loadingItem, setLoadingItem] = useState(null);

  async function fetchTeamInfo(index, date, type) {
    if (type == "rookie" && rookieTeamInfo[index]) return;
    if (mainTeamInfo[index]) return;

    setLoadingItem(index);
    try {
      const response = await fetch(`/api/get_team_info?date=${date}`);
      const data = await response.json();
      if (type == "rookie")
        setRookieTeamInfo((prev) => ({ ...prev, [index]: data }));
      else setMainTeamInfo((prev) => ({ ...prev, [index]: data }));
    } catch (error) {
      console.error("Failed to fetch team info:", error);
    } finally {
      setLoadingItem(null);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      setFetchLoading(true);
      const res = await fetch("/api/get_dates");
      const data = await res.json();
      setTuesdayData(data.tuesdays);
      setThursdayData(data.thursdays);
    };
    fetchData().then(() => setFetchLoading(false));
  }, []);
  return (
    <div className=" w-screen h-full flex flex-col justify-start items-center p-5">
      <div className="text-5xl py-10 font-bold">Admin page</div>
      <Tabs defaultValue="rookie" className="w-full mb-20">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="rookie">Rookie quiz</TabsTrigger>
          <TabsTrigger value="main">Quiz night</TabsTrigger>
        </TabsList>
        <TabsContent value="rookie">
          <h1 className="text-3xl py-10 font-bold">Rookie quiz</h1>
          <Accordion
            type="single"
            collapsible
            className="w-full rounded-md px-2"
          >
            {fetchLoading ? (
              <div>Loading</div>
            ) : (
              tuesdayData.map((date, index) => (
                <AccordionItem
                  value={"item-" + index}
                  key={index + date}
                  onClick={() => fetchTeamInfo(index, date, "rookie")}
                >
                  <AccordionTrigger>
                    {new Date(date).toLocaleDateString()}
                  </AccordionTrigger>
                  <AccordionContent>
                    {loadingItem === index ? (
                      <p>Loading...</p>
                    ) : rookieTeamInfo[index] ? (
                      <MyAccordionContent data={rookieTeamInfo[index]} />
                    ) : (
                      <p>No data available</p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))
            )}
          </Accordion>
        </TabsContent>
        <TabsContent value="main">
          <h1 className="text-3xl py-10 font-bold">Quiz Night</h1>
          <Accordion
            type="single"
            collapsible
            className="w-full rounded-md px-2"
          >
            {fetchLoading ? (
              <div>Loading</div>
            ) : (
              thursdayData.map((date, index) => (
                <AccordionItem
                  value={"item-" + index}
                  key={index + date}
                  onClick={() => fetchTeamInfo(index, date, "main")}
                >
                  <AccordionTrigger>
                    {new Date(date).toLocaleDateString()}
                  </AccordionTrigger>
                  <AccordionContent>
                    {loadingItem === index ? (
                      <p>Loading...</p>
                    ) : mainTeamInfo[index] ? (
                      <MyAccordionContent data={mainTeamInfo[index]} />
                    ) : (
                      <p>No data available</p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))
            )}
          </Accordion>
        </TabsContent>
      </Tabs>
    </div>
  );
}
