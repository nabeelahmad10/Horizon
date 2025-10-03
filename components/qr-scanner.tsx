"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, Scan, Search } from "lucide-react"

export function QRScanner() {
  const [scanResult, setScanResult] = useState<any>(null)
  const [manualTicketId, setManualTicketId] = useState("")

  const handleManualScan = () => {
    // Simulate ticket validation
    const isValid = Math.random() > 0.3
    setScanResult({
      valid: isValid,
      ticketId: manualTicketId,
      eventTitle: "Battle of Bands",
      holderName: "John Doe",
      ticketNumber: 1,
      checkInTime: new Date().toLocaleTimeString(),
    })
  }

  const handleStartScanner = () => {
    // In a real app, this would activate the camera for QR scanning
    console.log(" Starting QR scanner...")
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Scanner */}
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-6">QR Code Scanner</h2>

        {/* Camera View Placeholder */}
        <div className="aspect-square bg-muted rounded-lg flex items-center justify-center mb-6 border-2 border-dashed border-border">
          <div className="text-center">
            <Scan className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground mb-4">Position QR code within frame</p>
            <Button
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white"
              onClick={handleStartScanner}
            >
              Activate Camera
            </Button>
          </div>
        </div>

        {/* Manual Entry */}
        <div className="pt-6 border-t border-border">
          <h3 className="font-semibold mb-4">Manual Ticket Entry</h3>
          <div className="flex gap-2">
            <Input
              placeholder="Enter Ticket ID"
              value={manualTicketId}
              onChange={(e) => setManualTicketId(e.target.value)}
            />
            <Button onClick={handleManualScan}>
              <Search className="w-4 h-4 mr-2" />
              Verify
            </Button>
          </div>
        </div>
      </Card>

      {/* Scan Result */}
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-6">Scan Result</h2>

        {scanResult ? (
          <div>
            {/* Status */}
            <div className="flex items-center justify-center mb-8">
              {scanResult.valid ? (
                <div className="text-center">
                  <div className="inline-flex p-4 rounded-full bg-green-500/10 mb-4">
                    <CheckCircle2 className="w-16 h-16 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-500 mb-2">Valid Ticket</h3>
                  <p className="text-muted-foreground">Attendee can proceed</p>
                </div>
              ) : (
                <div className="text-center">
                  <div className="inline-flex p-4 rounded-full bg-red-500/10 mb-4">
                    <XCircle className="w-16 h-16 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-500 mb-2">Invalid Ticket</h3>
                  <p className="text-muted-foreground">Ticket not found or already used</p>
                </div>
              )}
            </div>

            {/* Ticket Details */}
            {scanResult.valid && (
              <div className="space-y-4 pt-6 border-t border-border">
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Ticket ID</span>
                  <span className="font-mono font-semibold">{scanResult.ticketId}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Event</span>
                  <span className="font-semibold">{scanResult.eventTitle}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Holder Name</span>
                  <span className="font-semibold">{scanResult.holderName}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Ticket Number</span>
                  <span className="font-semibold">#{scanResult.ticketNumber}</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-muted-foreground">Check-in Time</span>
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20">{scanResult.checkInTime}</Badge>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="mt-6">
              <Button className="w-full bg-transparent" variant="outline" onClick={() => setScanResult(null)}>
                Scan Next Ticket
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-center text-muted-foreground">
            <div>
              <Scan className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Scan a ticket to see results</p>
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}
