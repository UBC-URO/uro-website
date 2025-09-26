import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function TimelineTable() {
    return (
        <div className="rounded-xl border overflow-hidden">
            <Table className="w-full table-fixed">
                <TableHeader>
                    <TableRow className="bg-[#4B9C8E]">
                        <TableHead
                            className="border-r align-top 
               w-24 sm:w-32 md:w-40 lg:w-48 
               whitespace-normal break-words"
                        >
                            Time
                        </TableHead>
                        <TableHead className="align-top whitespace-normal break-words">Event</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {/* Year round */}
                    <TableRow>
                        <TableCell className="align-top font-semibold border-r whitespace-normal break-words">Year Round</TableCell>
                        <TableCell className="align-top whitespace-normal break-words">
                            <ul className="space-y-2">
                                <li className="list-disc list-inside">Lab Tours: Explore various research labs across UBC (details and photos to come).</li>
                                <li className="list-disc list-inside">Research Spotlights: Monthly Instagram features highlighting research opportunities.</li>
                            </ul>
                        </TableCell>
                    </TableRow>

                    {/* Fall Term: Sept – Oct */}
                    <TableRow>
                        <TableCell className="align-top font-semibold border-r whitespace-normal break-words">September – October</TableCell>
                        <TableCell className="align-top whitespace-normal break-words">
                            <ul className="space-y-2">
                                <li className="list-disc list-inside">Lab Tours: Explore various research labs across UBC (details and photos to come).</li>
                                <li className="list-disc list-inside">Research Spotlights: Monthly Instagram features highlighting research opportunities.</li>
                                <li className="list-disc list-inside">
                                    Workshop with UBC Career Centre: How to apply for research-based awards. Award recipients share personal application tips and insights.
                                </li>
                            </ul>
                        </TableCell>
                    </TableRow>

                    {/* Fall Term: Nov – Dec */}
                    <TableRow>
                        <TableCell className="align-top font-semibold border-r whitespace-normal break-words">November – December</TableCell>
                        <TableCell className="align-top whitespace-normal break-words">
                            <ul className="space-y-2">
                                <li className="list-disc list-inside">
                                    Panel Event: <span className="italic">Particle Physics to Personalized Medicine</span> — a discussion with panelists from both academia and industry.
                                </li>
                            </ul>
                        </TableCell>
                    </TableRow>

                    {/* Spring Term: Jan – Feb */}
                    <TableRow>
                        <TableCell className="align-top font-semibold border-r whitespace-normal break-words">January – February</TableCell>
                        <TableCell className="align-top whitespace-normal break-words">
                            <ul className="space-y-2">
                                <li className="list-disc list-inside">
                                    Work Learn Research Opportunities Workshop: Info session on paid research opportunities. Award recipients share personal application tips and insights.
                                </li>
                                <li className="list-disc list-inside">
                                    Skills Workshop Series: Intro to data analysis, building a research portfolio &amp; Approaching Faculty Workshop w/ Dr. Oliver
                                </li>
                            </ul>
                        </TableCell>
                    </TableRow>

                    {/* Spring Term: Mar – Apr */}
                    <TableRow>
                        <TableCell className="align-top font-semibold border-r whitespace-normal break-words">March – April</TableCell>
                        <TableCell className="align-top whitespace-normal break-words">
                            <ul className="space-y-2">
                                <li className="list-disc list-inside">
                                    Panel Event: <span className="italic">Neuroscience &amp; Technology: The Future of Technology in Industry</span>
                                </li>
                            </ul>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}
